import React from 'react';

class AddFishForm extends React.Component {
  //ref saves input values
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value, //accesses input values from ref!!!
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }

    this.props.addFish(fish); //calling our prop to add the fish
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        {/* INCLUDE REF IN INPUTS (SAVES INPUT VALUE TO REFERENCE LATER) */ }
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description"/>
        <input name="image" ref={this.imageRef} type="text" placeholder="image"/>
        <button type="submit">+ Add Fish</button>

      </form>
    )
  }
}

export default AddFishForm;
