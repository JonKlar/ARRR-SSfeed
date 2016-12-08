# == Schema Information
#
# Table name: feeds
#
#  id          :integer          not null, primary key
#  url         :string           not null
#  title       :string           not null
#  link        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Feed < ActiveRecord::Base
  validates :url, :title, presence: true;
  has_many :subscriptions
  has_many :collections, through: :subscriptions

end
