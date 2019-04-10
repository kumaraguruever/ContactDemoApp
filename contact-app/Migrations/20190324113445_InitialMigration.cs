using Microsoft.EntityFrameworkCore.Migrations;

namespace contactapp.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "Contact",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "gender",
                table: "Contact",
                newName: "Gender");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Contact",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Contact",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "birth",
                table: "Contact",
                newName: "BirthDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Contact",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Contact",
                newName: "gender");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Contact",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Contact",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "Contact",
                newName: "birth");
        }
    }
}
