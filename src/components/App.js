import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    /*
        pass the following callback as a prop to VideoList,
        which will pass that callback as a prop to VideoItem.
        Then, when VideoItem is clicked, callback is invoked
        and communicates to App component
    */
    onVideoSelect = (video) => {
        console.log('from the app:', video);
    }

    render() {
        return (
            <div className="ui contain">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

export default App;