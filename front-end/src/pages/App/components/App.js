import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm';
import '../../../main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchGitUserBykeyword = this.fetchGitUserBykeyword.bind(this);
  }

  fetchGitUserBykeyword({ keyword }) {
    this.props.fetchGitUserBykeyword(keyword);
  }

  render() {
    const { loading, datas } = this.props;
    
    const dataTag = datas.map(data =>
      <div key={data.id}>
        <Row className="repos_info_row">
          <Col lg={{ size: 3, offset: 3}}>
            <div className="github_avatar">
              <img src={data.avatar_url}/>
            </div>
          </Col>
          <Col lg={2} className="usename_repos">
            <div className="text-center">
              <p><a href={data.html_url} className="label">{data.login}</a></p>
              <a href={data.html_url+'?tab=repositories'} className="label">Repository</a>
            </div>
          </Col>
        </Row>
      </div>
    );
    return (
      <Container>
        <Row>
          <Col>
            <h1>User Search</h1>
            {/* <Link to="login">Logout</Link> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm onSubmit={this.fetchGitUserBykeyword} />
          </Col>
        </Row>
        { loading && <div>loading...<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" alt="image"/></div> }
        { !loading && datas && datas.length > 0 &&
          <div className="repos_list">
            {dataTag}
          </div>
        }
      </Container>
    );
  }
}

export default App;
