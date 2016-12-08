class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.string :link
      t.string :description

      t.timestamps null: false
    end
    add_index :feeds, :id
  end
end
