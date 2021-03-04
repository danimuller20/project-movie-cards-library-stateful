import React from 'react';
/* import PropTypes from 'prop-types'; */

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* subtitle: '',
      title: ''
      /* imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            onChange={ this.setState.title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            onChange={ this.setState.subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            onChange={ this.setState.imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
