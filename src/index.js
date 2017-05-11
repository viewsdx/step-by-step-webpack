import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { render } from 'react-dom'

const Home = () => (
  <div>
    Home!
    <Link to="more">more</Link>
  </div>
)
const More = () => (
  <div>
    More!
    <Link to="..">back</Link>
  </div>
)

render(
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/more" component={More} />
    </div>
  </Router>,
  document.getElementById('root')
)
