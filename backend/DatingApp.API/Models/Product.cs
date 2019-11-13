using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Models
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public long Quantity { get; set; }
        public string Description { get; set; }


    }

    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}