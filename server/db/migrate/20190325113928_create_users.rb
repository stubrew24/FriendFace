class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :image
      t.string :tagline
      t.string :location
      t.string :email

      t.timestamps
    end
  end
end
