import PropTypes from 'prop-types';

const MyComponent = (props) => {
  console.log(props);
  return <div className="mycomponent">component test {props.children}</div>;
};

MyComponent.propTypes = {
  children: PropTypes.string,
}

export default MyComponent;