import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParentInput from './ParentInput';
import ParentSelect from './ParentSelect';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    let { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    name = name === 'image' ? 'imagePath' : name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <ParentInput
          type="text"
          name="title"
          value={ title }
          lblTitle="Título"
          handleChange={ this.handleChange }
        />
        <ParentInput
          type="text"
          name="subtitle"
          value={ subtitle }
          lblTitle="Subtítulo"
          handleChange={ this.handleChange }
        />
        <ParentInput
          type="text"
          name="image"
          value={ imagePath }
          lblTitle="Imagem"
          handleChange={ this.handleChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyLineInput">
          Sinopse
          <textarea
            data-testid="image-input"
            id="storyLineInput"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <ParentInput
          type="number"
          name="rating"
          value={ rating }
          lblTitle="Avaliação"
          handleChange={ this.handleChange }
        />
        <ParentSelect value={ genre } handleChange={ this.handleChange } />
        <button data-testid="send-button" type="reset" onClick={ onClick(this.state) }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
