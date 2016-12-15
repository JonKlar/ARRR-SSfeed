class RenameArticlesavesTable < ActiveRecord::Migration
  def change
    rename_table :article_saves, :saved_articles
  end
end
