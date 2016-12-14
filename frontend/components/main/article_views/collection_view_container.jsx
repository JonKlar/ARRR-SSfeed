import { connect } from 'react-redux';
import CollectionView from './collection_view';
import { articlesInCollection } from '../../../reducers/selectors';
import { setSelectedArticle } from '../../../actions/selected_actions';

const mapStateToProps = (state) => ({
  collection: state.selected.collection,
  articles: articlesInCollection(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionView);
