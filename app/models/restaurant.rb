class Restaurant < ApplicationRecord
  has_many :comments, -> { order(:created_at => :desc) }
  has_many_attached :images

  validates :name, :description, presence: true
end