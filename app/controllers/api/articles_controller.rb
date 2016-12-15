class Api::ArticlesController < ApplicationController

  def create
    @article = Article.find_by(link: params[:article][:link])
    @article ||= Article.new(article_params)
    current_user.articles = current_user.articles.push(@article)
    @user = current_user
    render 'api/users/show'
  end

  def destroy
    @article = Article.find_by(link: params[:article][:link])
    @user = current_user
    if @article && @user
      @user.articles.delete(@article)
      render 'api/users/show'
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, :link, :content_snippet, :publishedDate, :author)
  end
end
