class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :project_length
      t.string :description
      t.string :url
      t.string :attachment
      t.integer :user_id

      t.timestamps
    end
  end
end
