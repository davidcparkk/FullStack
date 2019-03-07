class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :source_name, null: false
      t.string :description, null: false
      t.string :image_url
      t.timestamps
    end

  end
end
