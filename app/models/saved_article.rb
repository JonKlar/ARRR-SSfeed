# == Schema Information
#
# Table name: saved_articles
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SavedArticle < ActiveRecord::Base
  validates :user_id, :article_id, presence: true

  belongs_to :user
  belongs_to :article
end
