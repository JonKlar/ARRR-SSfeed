# == Schema Information
#
# Table name: articles
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  categories      :string
#  content         :string           not null
#  link            :string           not null
#  publishedDate   :string
#  author          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  content_snippet :string
#

class Article < ActiveRecord::Base
  validates :title, :content, :link, presence: true
  validates :link, uniqueness: true

  has_many :saved_articles


  has_many :users, through: :saved_articles

end
