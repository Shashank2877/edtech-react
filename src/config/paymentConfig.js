// src/config/paymentConfig.js

export const paymentConfig = {
  // Razorpay Configuration
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
    keySecret: import.meta.env.VITE_RAZORPAY_KEY_SECRET || 'YOUR_SECRET_HERE',
    currency: 'INR',
    companyName: 'NAMMA WEB LLP',
    companyLogo: '/download.png',
    theme: {
      color: '#B4A5FF'
    },
    // Test mode credentials (replace with live for production)
    testMode: import.meta.env.MODE !== 'production'
  },

  // PayPal Configuration
  paypal: {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'YOUR_PAYPAL_CLIENT_ID',
    currency: 'USD',
    intent: 'capture',
    // Test mode (replace with live for production)
    testMode: import.meta.env.MODE !== 'production'
  },

  // Payment Gateway URLs
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
    endpoints: {
      createOrder: '/payment/create-order',
      verifyPayment: '/payment/verify',
      saveEnrollment: '/enrollment/save',
      getOrderStatus: '/payment/order-status'
    }
  },

  // Payment Methods Available
  paymentMethods: [
    {
      id: 'razorpay',
      name: 'Razorpay',
      description: 'Pay with Credit/Debit Card, Net Banking, UPI, Wallets',
      icon: '💳',
      currencies: ['INR'],
      countries: ['IN'],
      enabled: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with PayPal (International)',
      icon: '🌐',
      currencies: ['USD', 'EUR', 'GBP'],
      countries: ['US', 'UK', 'EU'],
      enabled: false // Enable when PayPal integration is complete
    }
  ],

  // Course pricing and fees
  pricing: {
    consultationFee: 499, // in INR
    processingFee: 0, // in INR
    taxes: {
      gst: 18, // 18% GST
      applicable: true
    }
  },

  // Payment flow configuration
  flow: {
    redirectAfterPayment: '/payment-success',
    redirectAfterFailure: '/payment-failed',
    redirectAfterCancel: '/courses',
    timeoutDuration: 300000, // 5 minutes
    retryAttempts: 3,
    // Google Form for payment screenshot upload (no backend needed)
    googleFormUrl: import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLSfxAGtAE7WBt1xM61TAEdP5Zete7kJEL3iy2IBDVWwSI9Vuzw/viewform'
  },

  // Security settings
  security: {
    enableSignatureVerification: true,
    enableWebhooks: true,
    webhookSecret: import.meta.env.VITE_WEBHOOK_SECRET || 'your_webhook_secret'
  }
}

// Helper function to get available payment methods for a country
export const getAvailablePaymentMethods = (countryCode = 'IN') => {
  return paymentConfig.paymentMethods.filter(method => 
    method.enabled && 
    (method.countries.includes(countryCode) || method.countries.includes('GLOBAL'))
  )
}

// Helper function to calculate total amount including fees and taxes
export const calculateTotalAmount = (baseAmount, includeGST = true) => {
  const consultationFee = paymentConfig.pricing.consultationFee
  const processingFee = paymentConfig.pricing.processingFee
  
  let subtotal = baseAmount + consultationFee + processingFee
  
  if (includeGST && paymentConfig.pricing.taxes.applicable) {
    const gstAmount = (subtotal * paymentConfig.pricing.taxes.gst) / 100
    subtotal += gstAmount
  }
  
  return {
    baseAmount,
    consultationFee,
    processingFee,
    gstAmount: includeGST ? (subtotal - baseAmount - consultationFee - processingFee) : 0,
    totalAmount: Math.round(subtotal)
  }
}

// Helper function to format currency
export const formatCurrency = (amount, currency = 'INR') => {
  const formatters = {
    'INR': new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }),
    'USD': new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    'EUR': new Intl.NumberFormat('en-EU', { style: 'currency', currency: 'EUR' }),
    'GBP': new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
  }
  
  return formatters[currency]?.format(amount) || `${currency} ${amount}`
}

export default paymentConfig