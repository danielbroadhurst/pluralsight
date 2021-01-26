# Clean Architecture: Patterns, Practices and Principles - Course Notes

Clean Architecture is Architecture that is design for the inhabitants of the architecture (developers)... not for the architect or the machine!

## Domain-Centric Architecture
  - Classic Three-Layer Database-centric Architecture
    - Database at the centre with the Data Access, Business Logic and UI developed around the database.
  - Domain-centric Architecture
    - Domain at the centre with Persistance, Infrastructure, Application and Presentation layers built around the domain.

Domain is essential
Use cases are essential
Presentation is a detail - Web, App
Persistance is a detail - MySQL, JSON

  - Hexagonal Architecture
    - Built using Ports and Adapters
    - Plug in Architechture 
  - Onion Architecture
    - Layered domain model
    - No inner layer knows about the external layer
  - The Clean Architecture
    - Domain at the centre, Entities
    - Application layer with use cases
    - Outer layer with ports and adapters

Pros:
  - Focus on the Domain
  - Less coupling
  - Allows for Domain Driven Design
Cons:
  - Change is difficult
  - Requires more thought to implement
  - Initial higher cost

Organise folders by the key entities, such as Sales, Products, Customers and Common (which are shared).