class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :track
      t.string :tempo
      t.string :long_run

      t.timestamps
    end
  end
end
