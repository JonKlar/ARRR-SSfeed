class CreateSaves < ActiveRecord::Migration
  def change
    create_table :saves do |t|
      t.integer :user_id, null: false
      t.integer :article_id, null: false


      t.timestamps null: false
    end
    add_index :saves, :user_id
    add_index :saves, :article_id
  end
end
