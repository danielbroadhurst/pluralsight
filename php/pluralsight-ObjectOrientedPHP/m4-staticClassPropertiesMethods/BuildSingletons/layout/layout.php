<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Hair Colour</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($this->results as $item) { ?>
    <tr>
      <td><?php echo $item['id']?></td>
      <td><?php echo $item['firstname']?></td>
      <td><?php echo $item['lastname']?></td>
      <td><?php echo $item['haircolour']?></td>
    </tr>
    <?php } ?>
  </tbody>
</table>