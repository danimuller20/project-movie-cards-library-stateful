import React from 'react';
/* import PropTypes from 'prop-types'; */

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          onChange={ this.handleChange }
          value={ title }
          name="title"
        />
      </label>
    );
  }
  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
      Subtítulo
      <input
        data-testid="subtitle-input"
        type="text"
        onChange={ this.handleChange }
        value={ subtitle }
        name="subtitle"
      />
    </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
      Imagem
      <input
        data-testid="image-input"
        type="text"
        onChange={ this.handleChange }
        value={ imagePath }
        name="imagePath"
      />
    </label>
    );
  } 
  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ this.setState.rating }
            onChange={ this.setState.rating }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" onChange={ this.setState.genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
