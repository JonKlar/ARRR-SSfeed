class RenameSavesTable < ActiveRecord::Migration
  def change
    rename_table :saves, :articleSaves
  end
end
