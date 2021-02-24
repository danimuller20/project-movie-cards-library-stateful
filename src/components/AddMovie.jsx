import React from 'react';
import MovieImagePath from './MovieImagePath';
import MovieRating from './MovieRating';
import MovieStoryline from './MovieStoryline';
import MovieSubtitle from './MovieSubtitle';
import MovieTitle from './MovieTitle';
import MovieGenre from './MovieGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value
    });
  }

  buttonHandler(onClick) {
    onClick(this.state);
    // this.setState({
    //     subtitle: '',
    //     title: '',
    //     imagePath: '',
    //     storyLine: '',
    //     rating: 0,
    //     genre: 'action',
    // })
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <MovieTitle value={ title } changeHandler={ this.changeHandler } />
          <MovieSubtitle value={ subtitle } changeHandler={ this.changeHandler } />
          <MovieImagePath value={ imagePath } changeHandler={ this.changeHandler } />
          <MovieStoryline value={ storyLine } changeHandler={ this.changeHandler } />
          <MovieRating value={ rating } changeHandler={ this.changeHandler } />
          <MovieGenre value={ genre } changeHandler={ this.changeHandler } />
          <button 
            type="submit"
            data-testid="send-button"
            onClick={ this.buttonHandler(onClick) }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
