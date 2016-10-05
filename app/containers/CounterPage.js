import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Counter from '../components/Counter';
import Viewer from '../components/Viewer';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
    return {
        field: state.viewer.field
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
