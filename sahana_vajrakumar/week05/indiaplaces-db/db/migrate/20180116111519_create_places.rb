class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :description
      t.float :rating

      t.timestamps
    end
  end
end
