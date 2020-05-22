export default class Modal extends React.Component {
  render() {
      if(!this.props.modalShow){
          return null;
      }
    return <div>Hello Modal</div>;
  }
}