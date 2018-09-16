class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, index:{unique:true}, null: false
      t.string :password, null: false
      t.string :email, index:{unique:true}, null:false
      t.timestamps
    end
  end
end
