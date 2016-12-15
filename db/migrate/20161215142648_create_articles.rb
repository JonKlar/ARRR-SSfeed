class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :categories
      t.string :content, null: false
      t.string :link, null: false
      t.string :publishedDate
      t.string :author

      t.timestamps null: false
    end
    add_index :articles, :link, unique: true
  end
end
