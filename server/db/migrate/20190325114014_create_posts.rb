class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :comment
      t.integer :like_count
      

      t.timestamps
    end
  end
end
