import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters
});

export default connect(mapStateToProps)(Component);
