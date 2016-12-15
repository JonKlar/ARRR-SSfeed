class AddColumnToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :content_snippet, :string
  end
end
