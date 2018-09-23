class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user, index:true
      t.string :title
      t.string :description
      t.string :theme
      t.string :photourl
      t.timestamps
    end
  end
end
