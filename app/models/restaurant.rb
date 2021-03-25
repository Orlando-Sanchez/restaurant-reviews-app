class Restaurant < ApplicationRecord
  has_many :comments, -> { order(:created_at => :desc) }
  validates :name, :description, presence: true
  validates_length_of :name, maximum: 40
  validates_length_of :description, maximum:50
end