import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RSSParser from 'rss-parser';
import { Card, CardHeader } from 'material-ui';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderEpisode = this.renderEpisode.bind(this);

    this.state = {
      titles: [],
    }
  }

  componentWillMount() {
    var titles = [];

    let parser = new RSSParser();
    parser.parseURL('https://thewebplatform.libsyn.com/rss', function(err, feed) {
      console.log(feed.title);
      feed.items.forEach(function(entry) {
        console.log(entry.title)
        titles.push(entry.title);
      })

      this.setState({titles})
    }.bind(this))
  }

  renderEpisode(item, index) {
    return (
      <Card key={index}>
        <CardHeader title={item} subheader={""} />
      </Card>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gator Voices</h1>
        </header>
        <p className="App-intro">
          We are still working on the website. Check back soon!
        </p>
        {this.state.titles.map(this.renderEpisode)}
      </div>
    );
  }
}

export default App;
