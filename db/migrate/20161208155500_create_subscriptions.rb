class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :collection_id, null: false
      t.integer :feed_id, null: false

      t.timestamps null: false
    end
    add_index :subscriptions, :feed_id
    add_index :subscriptions, :collection_id
  end
end
