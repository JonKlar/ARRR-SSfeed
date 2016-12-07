class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.timestamps null: false
    end
    add_index :collections, :user_id
  end
end
