package main

import (
	"database/sql"
	"fmt"

	"github.com/go-sql-driver/mysql"
)

// var db *sql.db
//db row datas stored in stud struct
type stud struct {
	id   int
	name string
}

func main() {

	config := mysql.Config{
		// User : os.Getenv("DBUSER"),
		// Passwd: os.Getenv("DBPASS"),
		User:                 "root",
		Passwd:               "Golang@2022",
		Net:                  "tcp",
		Addr:                 "10.0.0.163:3306",
		DBName:               "inflofind",
		AllowNativePasswords: true,
	}
	//slice for storing struct value
	data := make([]stud, 0)

	// fmt.Println(config.FormatDSN())

	// returns *DB, Err
	db, err := sql.Open("mysql", config.FormatDSN())
	// fmt.Println(db)

	defer db.Close()

	if err != nil {
		panic(err)
	}

	err = db.Ping()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Connected")

	//Query executes a query that returns Rows Rows is the result of a query.
	// Its cursor starts before the first row of the result set. Use Next to advance from row to row.
	rows, err := db.Query("select ad_status_id,status from ad_status")

	if err != nil {
		fmt.Println(err)
	}

	for rows.Next() {
		// each value from row
		var eachdata stud

		err = rows.Scan(&eachdata.id, &eachdata.name)

		if err != nil {
			fmt.Println(err)
		}

		data = append(data, eachdata)

	}

	fmt.Println(data)

}
