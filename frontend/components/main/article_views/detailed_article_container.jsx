import DetailedArticle from './detailed_article';
import { connect } from 'react-redux';
import { clearSelectedArticle } from '../../../actions/selected_actions';

const mapStateToProps = (state) => ({
  selectedArticle: state.selected.article
});

const mapDispatchToProps = (dispatch) => ({
  clearSelectedArticle: () => dispatch(clearSelectedArticle())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedArticle);
