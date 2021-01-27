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

## Application Layer

  - Layers of abstraction
  - Single-responsibility
  - Isolate roles and skills
  - Multiple implementations
  - Varying rates of change

  - Modern Four-layer Architecture
    - Presentation, Application, Domain
      - Persistence & Database
      - Infrastructure & OS
  - Application Layer
    - Implements use cases
    - High level application logic
    - No knowledge of the other layers
    - Contains interfaces
  - Layer Dependencies
    - Dependency inversion
    - Inversion of control
    - Independent deployabilty 
    - Flexible and maintainable
Pros:
  - Focus on use cases
  - Easy to understand
  - Follows the Dependency Inversion Principle
Cons:
  - Additional layer cost
  - Requires extra thought
  - Inversion of Control is counter intuitive

## Commands and Queries

CQRS Architectures:
  - Split out Queries and Commands into separate layers. Commands use Domain and Persistance layer, Queries use the database.
  - Types: 
      - Single Database
      - Two database [Read Database -> Queries, Commands -> Write Database], 
      - Event Sourcing CQRS - Commands use an Event Store, Events can be replayed in sequence.

  - Command-Query Separation
    Command
      - Does something
      - Should modify state
      - Should not return a value
    Query
      - Answers a question
      - Should not modify state
      - Should return a value
    Exceptions
      - Pop a stack [Remove item (command), Return top item (query)]
      - Create a new record [Create a record (command), Returnnew ID (query)]
Pros:
  - More efficient design
  - Optimized performance
  - Event Sourcing benefits if Event Sourcing is implemented
Cons:
  - Inconsistent across stacks
  - More complex
  - Event sourcing costs