import { connect } from 'react-redux';
import * as actions from '../modules/list/actions';
import AppComponent from '../components/App';

const App = connect(null, actions)(AppComponent);

export default App;