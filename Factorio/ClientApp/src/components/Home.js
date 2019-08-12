﻿import React from 'react';
import EditGameForm from '../containers/EditGameForm';
import GameList from '../containers/GameList';
import LaunchGameForm from '../containers/LaunchGameForm';

const Header = () => (<header>Factorio!</header>)
const AddGame = () => (<button>Add Game!</button>)

export const Home = ({ editingGame, launchingGame }) => {
    if (editingGame) {
        var content = (<EditGameForm />)
    } else if (launchingGame) {
        var content = (<LaunchGameForm />);
    } else {
        var content = (<GameList />);
    }

    return (
        <div>
            <Header />
            <AddGame />
            {content}
        </div>
    )
};

export default Home