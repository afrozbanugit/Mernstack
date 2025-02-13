import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    
    backgroundColor: 'white',
  },
  section: {
    marginTop:10,
    marginLeft:15,
    padding: 10,
    height:"120px",
    width:"400px",
  },
  table: { display: "table", width: "100%", margin: 10 },
  row: { flexDirection: "row", borderBottom: "1 solid black", padding: 5 },
  cell: { flex: 1, textAlign: "center" },
  header:{marginLeft:10,marginTop:10}
});

// Create Document Component

const MyPdfDocument = ({ date,totalAmount,quantity,cartlist }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <Text style={styles.header}>Order details :</Text>
      <View style={styles.section}>    
        <Text>Order date  : {date}</Text>
        <Text>Total Amount: {totalAmount}</Text>
        <Text>Quantity    : {quantity}</Text>
      </View>
        <Text style={styles.header}>List of Items</Text>      
            
        <View style={styles.table}>
        {/* Table Header */}
          <View style={[styles.row, { fontWeight: "bold", backgroundColor: "white" }]}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Price</Text>
            <Text style={styles.cell}>Quantity</Text>
        </View>
        {/* Table Rows */}
        {cartlist.map((item) => (
          <View style={styles.row} key={item._id}>
            <Text style={styles.cell}>{item.prodName}</Text>
            <Text style={styles.cell}>{item.price}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
          </View>
        ))}
      </View>
     
    </Page>
  </Document>
);

export default MyPdfDocument;