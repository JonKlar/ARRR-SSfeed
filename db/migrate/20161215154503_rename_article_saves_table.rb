class RenameArticleSavesTable < ActiveRecord::Migration
  def change
    rename_table :articleSaves, :article_saves
  end
end
