import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  PC: '#FFF',
  dark: '#000',
});

const Main = styled.div`
	margin-left: 30%;
  margin-top: 60px;
	padding: 30px;

  background-color: ${boxBackgroundColor};
`;

Main.defaultProps = {
	theme: 'PC',
}

Main.propTypes = {
  theme: PropTypes.string.isRequired,
}

export default Main;