# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ActiveRecord::Base
  validates :user, presence: true
  validates :title, presence: true
  validates :feeds, uniqueness: true

  belongs_to :user
  has_many :subscriptions
  has_many :feeds, through: :subscriptions

end
