import { connect } from 'react-redux';
import { setSelectedArticle } from '../../../actions/selected_actions';
import TodayView from './today_view';
import { articlesFromToday } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  articles: articlesFromToday(state)
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayView);
