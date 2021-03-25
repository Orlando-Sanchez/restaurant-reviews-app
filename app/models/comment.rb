class Comment < ApplicationRecord
  belongs_to :restaurant

  validates :restaurant_id, presence: true
  validates :restaurant, presence: true
  validates :username, :text, presence: true
  validates_length_of :username, maximum: 30
  validates_length_of :text, maximum: 1000
end
